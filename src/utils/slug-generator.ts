export const generateSlug = (name: string) => {
  const now = new Date();
  return (
    `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}-` +
    name.toLowerCase().replace(/\//g, "-").replace(/ /g, "-")
  );
};
