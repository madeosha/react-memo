export const getLeaders = async () => {
  const response = await fetch("https://wedev-api.sky.pro/api/v2/leaderboard", { method: "GET" });
  if (!response.ok) {
    throw new Error("Не удалось загрузить список лидеров");
  }
  const data = await response.json();
  return data;
};

export const addLeader = async ({ name, time, achievements }) => {
  const response = await fetch("https://wedev-api.sky.pro/api/v2/leaderboard", {
    method: "POST",
    body: JSON.stringify({ name, time, achievements }),
  });
  if (!response.ok) {
    throw new Error("Не удалось добавить нового лидера");
  }
  const data = await response.json();
  return data;
};
