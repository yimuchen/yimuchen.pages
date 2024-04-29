---
title: 電阻計算機 (Resistance calculator)
tags: [computing, tools, electronics]
---

This is a tool for helping one get a reasonable resistance value given a limit
selection of resistor, by generating groups of parallel resistors. The rationale
for limiting the question to just parallel resistors/capacitors is that this is
the scenario that typically occurs in electronics experiments, particularly with
surface mount experiments: stacking components in parallel is much easier (in
most cases), than making extra space for components in series. Allowing the use
of components in both parallel and serial have the problem much too complicated
to write, so I'm limiting the use case to either just parallel or just series.

Be warned that this algorithm is currently very non-optimized, and can consume
a very large amount of memory. To help the algorithm end early, try using a
smaller tolerance or lower the maximum number of components allowed.

Since I this a tool primarily for my own use. I have loaded in some of the
components found in the electronics lab of the UMD CMS group. All the code can
be found on the [GitHub repository](https://github.com/yimuchen/yimuchen.pages)
of this blog.

<table>
  <colgroup>
    <col style="width:30%">
    <col style="max-width:50%;">
  </colgroup>
  <tr>
    <td>
        <h3>Resistor values</h3>
    </td>
    <td>
        <div id="resistors" style="display: table;"></div><br/>
        <button on:click={clear_resistors}>Clear</button>
    </td>
  </tr>
  <tr>
    <td>
        <b>Set custom values</b>
        <p style="font-size: 0.8em;">
        Add a list of impedance values, separated by spaces. The short hands like 100K, 15.6M
        can be used. The multipliers 'p', 'n', 'u', 'm' 'k/K', 'M', 'G' may be used.
        </p>
    </td>
    <td>
        <input type="text" id="resistance-input" style="width:100%;"/>
        <button on:click={add_resistance}>Add to calculator</button><br/>
    </td>
  </tr>
  <tr>
    <td><b> Load preset values </b></td>
    <td>
        <button on:click={load_E12}>Set to E12 collection</button>
        <button on:click={load_E24}>Set to E24 collection</button>
        <button on:click={load_UMD0603_resistor}>Set to UMD 0603 Resistor
    </td>
  </tr>
  <tr style="border-top: thick;">
    <td><b>Target value</b></td>
    <td><input type="text" id="target"/></td>
  </tr>
  <tr>
    <td><b>Max. components</b></td>
    <td>
       <input type="text" id="num" value="3"/>
    </td>
  </tr>
  <tr>
    <td><b>Tolerance</b></td>
    <td>
        <input type="text" id="tolerance" value="0.05"/>
    </td>
  </tr>
  <tr>
  <td><b>Calculation type</b></td>
  <td>
    <input type="radio" name="sum_type" id="sum" />R-Series/C-Parallel<br/>
    <input type="radio" name="sum_type" id="invsum" checked/>R-Parallel/C-Series
  </td>
  </tr>
  <tr>
    <td></td>
    <td><button on:click={run_calculate}>Calculate</button></td>
  </tr>
</table>

<h2>Results</h2>
<div id="results"></div>
<div id="debug"></div>

<script>
/*The only global variable that we will keep is the full list of resistors */
var resistor_list = [];

function abs(x) {
  if (x > 0) { return x; }
  else { return -x; }
}

function error(val, target) {
  return abs(val - target) / target;
}

function sum(input) {
  var ans = 0;
  input.forEach((ele) => ans += ele);
  return ans;
}

function invsum(input) {
    var ans = 0;
      input.forEach((ele)=> ans += 1/ele);
      return 1/ans;
}


function make_resistance_string(input) {
  const mult = input < 1e-9 ? 1e-12 :
               input < 1e-6 ? 1e-9 :
               input < 1e-3 ? 1e-6 :
               input < 1 ? 1e-3 :
               input < 1e3 ? 1 :
               input < 1e6 ? 1e3 :
               input < 1e9 ? 1e6 : 1e9;
  const postfix = input < 1e-9 ? 'p' :
                  input < 1e-6 ? 'n' :
                  input < 1e-3 ? 'u' :
                  input < 1e0 ? 'm' :
                  input < 1e3 ? ' ' :
                  input < 1e6 ? 'k' :
                  input < 1e9 ? 'M' : 'G';
  return `${Number.parseFloat((input / mult).toFixed(5))}` + postfix;
}

function resistance_from_string(input) {
    const multipler_postfix = 'pnumkKMG';
    var mult = input.charAt(input.length - 1)
    if (multipler_postfix.includes(mult)) {
        input = input.substring(0, input.length - 1)
    }
     mult = mult == 'p' ? 1e-12 :
           mult == 'n' ? 1e-9 :
           mult == 'u' ? 1e-6 :
           mult == 'm' ? 1e-3 :
           mult == 'k' ? 1e3 :
           mult == 'K' ? 1e3 :
           mult == 'M' ? 1e6 :
           mult == 'G' ? 1e9 : 1;

  return Number(input) * mult;
}

function display_solutions(solution_list) {
  // Getting the key values from the document formats
  const target = resistance_from_string(document.getElementById("target").value);
  const tolerance = Number(document.getElementById("tolerance").value);
  const sum_method = document.getElementById("invsum").checked ? invsum : sum;

  // Sorting the solution list.

  solution_list.sort( (a, b) => {
    // Comparing error first
    var error_diff = error(sum_method(a), target) - error(sum_method(b), target);
    if (error_diff != 0) {
      return error_diff;
    }

    // Then comparing the number of elements.
    var len_diff = a.length - b.length;
    if (len_diff != 0) {
      return len_diff;
    }

    // Finally comparing the number of unique components
    var a_unique = a.filter((v, i, a) => a.indexOf(v) === i);
    var b_unique = b.filter((v, i, a) => a.indexOf(v) === i);
    return a_unique.length - b_unique.length;
  });

  // Keeping only the first 100 solutions
  var html = 'Total number of solutions: ' + solution_list.length;
  if (solution_list.length > 100) {
    html += '(Showing closest 100 solutions)';
  }

  html += '<table style="margin-left: auto; margin-right: auto;">';
  html += `<tr style="text-align:center">
           <th>Combination</th>
           <th>Result</th>
           <th>Deviation</th>
  </tr>`
  for (var i = 0; i < solution_list.length && i < 100; ++i) {
    const solution = solution_list[i];
    const sum_result = sum_method(solution);
    const error_val = error(sum_result, target);

    html += `<tr>`
    html += `<td>`
    for (var j = 0; j < solution.length; ++j) {
      if (j != 0) {
        if (sum_method === invsum ) { html += ' || '; }
        else { html += ' + '; }
      }
      html += make_resistance_string(solution[j]);
    }
    html += '</td>';

    html += `<td>${sum_result.toFixed(2)}</td>`;
    html += `<td>${(error_val * 100).toFixed(1)}% </td>`;
    html += '</tr>';
  }
  html += '</table>'
  document.getElementById("results").innerHTML = html;
}

function run_calculate() {
    var solution_list = []; // Creating the container from the solution
    const target = resistance_from_string(document.getElementById("target").value);
    const tolerance = Number(document.getElementById("tolerance").value);
    const sum_type = document.getElementById("invsum").checked ? invsum : sum;
    const max_comp = Number(document.getElementById("num").value);

    iterate_combination(
            solution_list,
            [], // Start from empty components list
            max_comp,
            sum_type,
            target,
            tolerance
        );
    console.log("Final result:", solution_list);

    display_solutions(solution_list);
}

function iterate_combination(
    solution_list,
    current_comb,
    max_length,
    sum_method,
    target,
    tolerance,
    ) {
    var direction = sum_method === sum ? +1 : -1;
    var start_idx = sum_method === sum ? 0 : resistor_list.length - 1;
    if (current_comb.length > 0) {
      start_idx = resistor_list.indexOf(current_comb[current_comb.length - 1]);
    }
    for (var i = start_idx; i < resistor_list.length && i >= 0; i += direction) {
      const new_comb = [...current_comb, resistor_list[i]];
      const sum_result = sum_method(new_comb);

      if( error(sum_result, target) < tolerance ){
        solution_list.push(new_comb);
      }
      if( sum_method === sum ){
         if( sum_result > target * (1+tolerance)){
             break;
         }
      } else if( sum_method === invsum){
        if( sum_result < target * (1+tolerance)){
            break;
        }
      }
      if( new_comb.length < max_length ){
        iterate_combination(solution_list, new_comb, max_length, sum_method, target, tolerance);
      }
    }
}


function set_resistor_list(list){
    // Updating the global variable list
    resistor_list = list.sort((a,b)=>(a-b));
    resistor_list = resistor_list.filter((value, index, arr)=>(arr.indexOf(value) === index));

    // Creating the display elements of what is used for calculating
    var line_min = 1e-12;
    var line_max = 1e-11;
    var html = '<div>'
    while (line_max < 1e10) {
        var line_values = resistor_list.filter(function (v, i, a) {
            return (line_min <= v && v < line_max);
        })
        var line = '<div style="display: table-row;">';
        line_values.forEach((ele)=>{ line  += '<div style="display: table-cell; padding-left:0.2em;">' + make_resistance_string(ele) + '</div>';  })
        line += '</div>';
        if (line_values.length > 0) {
            html += line;
        }
        line_min *= 10;
        line_max *= 10;
    }
    if( resistor_list.length === 0 ){
        html += "(None)";
    } 
    html += '</div>'
    document.getElementById('resistors').innerHTML = html;
}

function add_resistance() {
    var new_resistors = document.getElementById("resistance-input").value;
    new_resistors = new_resistors.split(/[\s,]+/);
    new_resistors = new_resistors.map((ele)=>(resistance_from_string(ele)));
    set_resistor_list([...resistor_list, new_resistors]);
}


function _expand_base_list(base_list){
    const full_list = [];
    for( const mult of [1, 10, 100, 1000, 10000, 100000]){
        base_list.forEach((ele)=> full_list.push(ele*mult))
    }
    return full_list;
}

function load_E12() {
    const base_list = [1.0, 1.2, 1.5, 1.8, 2.2, 2.7, 3.3, 3.9, 4.7, 5.6, 6.8, 8.2];
    set_resistor_list(_expand_base_list(base_list));
    document.getElementById('tolerance').value = 0.05
}

function load_E24() {
    const base_list = [
        1.0, 1.1, 1.2, 1.3, 1.5, 1.6, 1.8,
        2.0, 2.2, 2.4, ,2.7,
        3.0, 3.3, 3.6, 3.9,
        4.3, 4.7, 5.1, 5.6,
        6.2, 6.8, 7.5,
        8.2, 9.1
    ];
    set_resistor_list(_expand_base_list(base_list));
    document.getElementById('tolerance').value = 0.01
}

function load_UMD0603_resistor() {
    set_resistor_list([
        100000, 150000,
        1000, 1400, 3320, 4750,
        4.7, 10, 20, 24.9, 39, 49.9, 75,
        100, 1200, 165, 200, 300, 620,
        16200, 34000, 49900,
    ])
    document.getElementById('invsum').checked = true;
}

function clear_resistors() {
    set_resistor_list([]);
}

import { onMount } from "svelte";

onMount(()=>{load_UMD0603_resistor(); })


</script>

---

## About the algorithm

The algorithm is basically brute forcing all possible combinations with an
early exist for when combination moves above/below the tolerance, since if
calculating resistance series, the total resistance can only go up, and there
is no point in trying more if already past the tolerance threshold (vice versa
for resistance parallel calculations). This is highly inefficient and very
memory hungry, but is easy enough to code in one afternoon, that is what I
went with :/

<style>
td {
    padding-left: 0.5em;
    padding-right: 0.5em;
}
th {
    padding-left: 0.5em;
    padding-right: 0.5em;
}
</style>
