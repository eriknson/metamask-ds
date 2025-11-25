export type ComponentItem = {
  slug: string;
  title: string;
  description: string;
};

export const primitives: ComponentItem[] = [
  {
    slug: "button",
    title: "Button",
    description: "Interactive element for actions and triggers.",
  },
  {
    slug: "input",
    title: "Input",
    description: "Form field for user text input.",
  },
  {
    slug: "card",
    title: "Card",
    description: "Container for grouping related content.",
  },
  {
    slug: "badge",
    title: "Badge",
    description: "Small status indicator or label.",
  },
  {
    slug: "avatar",
    title: "Avatar",
    description: "Visual representation of a user or entity.",
  },
  {
    slug: "switch",
    title: "Switch",
    description: "Toggle control for boolean states.",
  },
  {
    slug: "skeleton",
    title: "Skeleton",
    description: "Placeholder for loading content.",
  },
  {
    slug: "dialog",
    title: "Dialog",
    description: "Modal overlay for critical information.",
  },
  {
    slug: "select",
    title: "Select",
    description: "Dropdown menu for choosing an option.",
  },
  {
    slug: "banner",
    title: "Banner",
    description: "Dismissible notification area with icon and content.",
  },
];

export const metamaskComponents: ComponentItem[] = [
  {
    slug: "account-picker",
    title: "Account Picker",
    description: "Select and view connected accounts.",
  },
  {
    slug: "token-cell",
    title: "Token Cell",
    description: "List item displaying token asset data.",
  },
  {
    slug: "token-list",
    title: "Token List",
    description: "List component displaying multiple tokens with title and see all link.",
  },
  {
    slug: "footer-nav",
    title: "Footer Nav",
    description: "Bottom navigation for mobile views.",
  },
  {
    slug: "sorting",
    title: "Sorting",
    description: "Drawer component for sorting lists.",
  },
  {
    slug: "pay-with",
    title: "Pay With",
    description: "Payment method selector showing token and balance.",
  },
  {
    slug: "empty-state",
    title: "Empty State",
    description: "Placeholder for empty content areas with optional actions.",
  },
];
