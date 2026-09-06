export type ConceptSection = {
  id: string;
  label: string;
  title: string;
  description: string;
};

export const learningSections: ConceptSection[] = [
  { id: "intuition", label: "01", title: "Intuition", description: "Start with the problem before introducing the terminology." },
  { id: "visual", label: "02", title: "Visual model", description: "Turn the idea into something you can see and trace." },
  { id: "mechanism", label: "03", title: "Mechanism", description: "Reveal what changes, moves, branches or repeats." },
  { id: "code", label: "04", title: "Code connection", description: "Connect the mental model to real programming constructs." },
  { id: "playground", label: "05", title: "Playground", description: "Change the inputs and watch the concept respond." },
  { id: "recall", label: "06", title: "Recall", description: "Predict, explain and test the idea before moving on." },
];

export const concepts = [
  { slug: "paradigms", number: "01", title: "Programming Paradigms", group: "Foundations", description: "Different ways of thinking about how programs are structured and executed." },
  { slug: "structured", number: "02", title: "Structured Programming", group: "Control flow", description: "Sequence, selection and repetition as visible execution paths." },
  { slug: "oop", number: "03", title: "Object-Oriented Programming", group: "Abstraction", description: "Objects, classes and the ideas that organize behavior and data." },
  { slug: "subroutines", number: "04", title: "Subroutines", group: "Modularity", description: "Break complex programs into focused, reusable pieces." },
  { slug: "serialization", number: "05", title: "Object Serialization", group: "State & data", description: "Follow an object's state as it becomes portable and is reconstructed." },
  { slug: "parallel", number: "06", title: "Parallel Computing", group: "Performance", description: "Split work across processing units and see speed, scale and overhead." },
];
