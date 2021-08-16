const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("data.json");
const data = require("./data.json");
const middlewares = jsonServer.defaults();
server.use(middlewares);

server.get("/company/amounts", (req, res) => {
  const result = {
    companyAmounts: [],
    totalItems: 0,
  };
  data.companies.map((company) => {
    const amount = data.items.filter(
      (e) => e.manufacturer === company.slug
    ).length;
    result.companyAmounts.push({
      company: company.name,
      amount,
      slug: company.slug,
    });
    result.totalItems += amount;
  });
  res.json(result);
});

server.get("/tags", (req, res) => {
  const tagSet = new Set();
  const result = {
    tags: [],
    totalItems: data.items.length,
  };
  data.items.map((item) => {
    for (let tag of item.tags) {
      tagSet.add(tag);
    }
  });
  Array.from(tagSet).map((tag) => {
    const itemsForTag = data.items.filter(
      (e) => e.tags.indexOf(tag) >= 0
    ).length;
    result.tags.push({
      tag: tag,
      amount: itemsForTag,
    });
  });
  res.json(result);
});

server.use(router);
server.listen(8081, () => {
  console.log("JSON Server is running!");
});
