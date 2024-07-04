// To be ran before the ran before the data
export const load = async () => {
  return {
    experience: [
      await import("/src/routes/about/experience/phd_umd.md"),
      await import("/src/routes/about/experience/ms_ntu.md"),
    ],
    toolkit: [
      await import("/src/routes/about/toolkit/numerical.md"),
      await import("/src/routes/about/toolkit/app.md"),
      await import("/src/routes/about/toolkit/system.md"),
      await import("/src/routes/about/toolkit/web.md"),
    ],
  };
};
