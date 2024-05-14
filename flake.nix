{
  description = "Package for my GitHub pages blog";
  inputs = { nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable"; };

  outputs = { self, nixpkgs, ... }:
    let
      system = "x86_64-linux";
      pkgs = nixpkgs.legacyPackages.${system};
    in {
      # Adding shell that is required for developement using editors, this is
      # mainly to include additional language servers and formatters that are
      # not listed for interactive use.
      devShells.${system}.default = pkgs.mkShell {
        packages = [
          pkgs.nodePackages.nodejs
          # Try to pull language server from global
          pkgs.nodePackages.vscode-css-languageserver-bin
          pkgs.nodePackages.svelte-language-server
        ];

        shellHook = ''
          npm i
        '';
      };
      # We need to treat this as a package,
      defaultPackage.x86_64-linux = pkgs.nodejs_20;
    };
}

