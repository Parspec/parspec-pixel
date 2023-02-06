export type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};
export const defaultData: Person[] = [
  {
    firstName: 'tanner',
    lastName: 'linsley',
    age: 24,
    visits: 100,
    status: 'In Relationship',
    progress: 50
  },
  {
    firstName: 'tandy',
    lastName: 'miller',
    age: 40,
    visits: 40,
    status: 'Single',
    progress: 80
  },
  {
    firstName: 'joe2',
    lastName: 'dirte2',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10
  },
  {
    firstName: 'joe3',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10
  },
  {
    firstName: 'joe4',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10
  },
  {
    firstName: 'joe5',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10
  },
  {
    firstName: 'tanner',
    lastName: 'linsley',
    age: 24,
    visits: 100,
    status: 'In Relationship',
    progress: 50
  },
  {
    firstName: 'tandy',
    lastName: 'miller',
    age: 40,
    visits: 40,
    status: 'Single',
    progress: 80
  },
  {
    firstName: 'joe2',
    lastName: 'dirte2',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10
  },
  {
    firstName: 'joe3',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10
  },
  {
    firstName: 'joe4',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10
  },
  {
    firstName: 'joe5',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10
  },
  {
    firstName: 'tanner',
    lastName: 'linsley',
    age: 24,
    visits: 100,
    status: 'In Relationship',
    progress: 50
  },
  {
    firstName: 'tandy',
    lastName: 'miller',
    age: 40,
    visits: 40,
    status: 'Single',
    progress: 80
  },
  {
    firstName: 'joe2',
    lastName: 'dirte2',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10
  },
  {
    firstName: 'joe3',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10
  },
  {
    firstName: 'joe4',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10
  },
  {
    firstName: 'joe5',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10
  },
  {
    firstName: 'tanner',
    lastName: 'linsley',
    age: 24,
    visits: 100,
    status: 'In Relationship',
    progress: 50
  },
  {
    firstName: 'tandy',
    lastName: 'miller',
    age: 40,
    visits: 40,
    status: 'Single',
    progress: 80
  },
  {
    firstName: 'joe2',
    lastName: 'dirte2',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10
  },
  {
    firstName: 'joe3',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10
  },
  {
    firstName: 'joe4',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10
  },
  {
    firstName: 'joe5',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10
  },
  {
    firstName: 'tanner',
    lastName: 'linsley',
    age: 24,
    visits: 100,
    status: 'In Relationship',
    progress: 50
  },
  {
    firstName: 'tandy',
    lastName: 'miller',
    age: 40,
    visits: 40,
    status: 'Single',
    progress: 80
  },
  {
    firstName: 'joe2',
    lastName: 'dirte2',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10
  },
  {
    firstName: 'joe3',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10
  },
  {
    firstName: 'joe4',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10
  },
  {
    firstName: 'joe5',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10
  }
];
export type Project = {
  wonStatus: boolean;
  bomId: string;
  customer: string;
  lastModified: { lastModifiedBy: string, lastModifiedTime: string };
  quote: {
    quoteStatus: boolean,
    quoteActionTakenBy: string
  };
  submittal: {
    submittalStatus: boolean,
    submittalActionTakenBy: string
  };
};

export const defaultDataP: Project[] = [
  {
    wonStatus: true,
    bomId: "RF-567890",
    customer: "Ace Builders",
    lastModified: { lastModifiedBy: "Courtney Henry", lastModifiedTime: "Aug 18, 2023 at 04:12pm" },
    quote: {
      quoteStatus: true,
      quoteActionTakenBy: "Jacob Jones"
    },
    submittal: {
      submittalStatus: false,
      submittalActionTakenBy: "Jane Cooper"
    }
  },
  {
    wonStatus: false,
    bomId: "RF-567890",
    customer: "Ace Builders",
    lastModified: { lastModifiedBy: "Courtney Henry", lastModifiedTime: "Aug 18, 2023 at 04:12pm" },
    quote: {
      quoteStatus: true,
      quoteActionTakenBy: "Jacob Jones"
    },
    submittal: {
      submittalStatus: true,
      submittalActionTakenBy: "Jane Cooper"
    }
  },
  {
    wonStatus: false,
    bomId: "RF-567890",
    customer: "Ace Builders",
    lastModified: { lastModifiedBy: "Courtney Henry", lastModifiedTime: "Aug 18, 2023 at 04:12pm" },
    quote: {
      quoteStatus: false,
      quoteActionTakenBy: "Jacob Jones"
    },
    submittal: {
      submittalStatus: false,
      submittalActionTakenBy: "Jane Cooper"
    }
  },
  {
    wonStatus: false,
    bomId: "RF-567890",
    customer: "Ace Builders",
    lastModified: { lastModifiedBy: "Courtney Henry", lastModifiedTime: "Aug 18, 2023 at 04:12pm" },
    quote: {
      quoteStatus: false,
      quoteActionTakenBy: "Jacob Jones"
    },
    submittal: {
      submittalStatus: true,
      submittalActionTakenBy: "Jane Cooper"
    }
  },

];
