var members = [
  {
    initials: "FP",
    jobTitle: "Front-End Developer",
    category: "notice",
  },
  {
    initials: "ML",
    jobTitle: "Front-End Developer",
    category: "still-in",
  },
  { initials: "RH", jobTitle: "Front-End Developer", category: "notice" },
  {
    initials: "NR",
    jobTitle: "Front-End Developer",
    category: "left",
  },
  {
    initials: "RG",
    jobTitle: "Front-End Developer",
    category: "left",
  },
  { initials: "PR", jobTitle: "Test Lead", category: "notice" },
  {
    initials: "MR",
    jobTitle: "Back-End Developer",
    category: "notice",
  },
  {
    initials: "RT",
    jobTitle: "Back-End Developer",
    category: "notice",
  },
  {
    initials: "MS",
    jobTitle: "Back-End Developer",
    category: "still-in",
  },
  {
    initials: "SW",
    jobTitle: "Back-End Developer",
    category: "still-in",
  },
  {
    initials: "PW",
    jobTitle: "Back-End Developer",
    category: "still-in",
  },
];

exports.teamMembers = (req, res) => {
  res.send(members);
};
