interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description:
        "Pending - Cupidatat et elit eiusmod ipsum ea exercitation elit voluptate esse ad.",
      createdAt: Date.now(),
      status: "pending",
    },
    {
      description: "In progress - Magna aute nisi est elit cillum velit do.",
      createdAt: Date.now() - 450000,
      status: "in-progress",
    },
    {
      description:
        "Finished - Tempor cupidatat est ad in laborum velit deserunt consequat commodo culpa fugiat non incididunt velit.",
      createdAt: Date.now() - 100000,
      status: "finished",
    },
  ],
};
