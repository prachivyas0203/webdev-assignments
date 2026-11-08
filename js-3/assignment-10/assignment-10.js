const count = Number(prompt("How many candidates?"));
const candidates = [];

for (let i = 0; i < count; i++) {
  candidates.push({ name: prompt(`Name for candidate ${i + 1}:`), votes: 0 });
}

const voters = Number(prompt("How many voters?"));

for (let i = 0; i < voters; i++) {
  const vote = prompt(`Voter ${i + 1}, enter a candidate name (blank for empty vote):`);
  if (!vote || !vote.trim()) continue;

  const candidate = candidates.find(item => item.name.toLowerCase() === vote.trim().toLowerCase());
  if (candidate) candidate.votes++;
}

candidates.sort((a, b) => b.votes - a.votes);

if (candidates.length) {
  console.log(`The winner is ${candidates[0].name} with ${candidates[0].votes} votes.`);
  console.log("results:");

  for (const candidate of candidates) {
    console.log(`${candidate.name}: ${candidate.votes} votes`);
  }
}