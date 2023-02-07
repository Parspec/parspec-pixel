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
export type LastModifiedType = {
  lastModifiedBy: string;
  lastModifiedTime: string;
};
export type QuoteType = {
  quoteStatus: boolean;
  quoteActionTakenBy: string;
};
export type SubmittalType = {
  submittalStatus: boolean;
  submittalActionTakenBy: string;
};
export type Project = {
  wonStatus: boolean;
  bomId: string;
  customer: string;
  lastModified: LastModifiedType;
  quote: QuoteType;
  submittal: SubmittalType;
};
export const defaultDataP: Project[] = [
  {
    wonStatus: true,
    bomId: "RF-167890",
    customer: "Ace Builders",
    lastModified: { lastModifiedBy: "Ali Henry", lastModifiedTime: "Aug 18, 2023 at 04:12pm" },
    quote: {
      quoteStatus: true,
      quoteActionTakenBy: "Amber Jones"
    },
    submittal: {
      submittalStatus: false,
      submittalActionTakenBy: "Jane Cooper"
    }
  },
  {
    wonStatus: false,
    bomId: "RF-267890",
    customer: "Base Builders",
    lastModified: { lastModifiedBy: "Ben Henry", lastModifiedTime: "Aug 18, 2023 at 04:12pm" },
    quote: {
      quoteStatus: true,
      quoteActionTakenBy: "Bomber Jones"
    },
    submittal: {
      submittalStatus: true,
      submittalActionTakenBy: "Main Cooper"
    }
  },
  {
    wonStatus: false,
    bomId: "RF-367890",
    customer: "Case Builders",
    lastModified: { lastModifiedBy: "Casy Henry", lastModifiedTime: "Aug 18, 2023 at 04:12pm" },
    quote: {
      quoteStatus: false,
      quoteActionTakenBy: "Coder Jones"
    },
    submittal: {
      submittalStatus: false,
      submittalActionTakenBy: "Saint Cooper"
    }
  },
  {
    wonStatus: false,
    bomId: "RF-467890",
    customer: "Dream Builders",
    lastModified: { lastModifiedBy: "Daisy Henry", lastModifiedTime: "Aug 18, 2023 at 04:12pm" },
    quote: {
      quoteStatus: false,
      quoteActionTakenBy: "Deadly Jones"
    },
    submittal: {
      submittalStatus: true,
      submittalActionTakenBy: "Lane Cooper"
    }
  },
  {
    wonStatus: true,
    bomId: "RF-567890",
    customer: "Eagle Builders",
    lastModified: { lastModifiedBy: "Ellie Henry", lastModifiedTime: "Aug 18, 2023 at 04:12pm" },
    quote: {
      quoteStatus: false,
      quoteActionTakenBy: "Ellie Jones"
    },
    submittal: {
      submittalStatus: true,
      submittalActionTakenBy: "Zen Cooper"
    }
  },
];
