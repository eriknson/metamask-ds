import React from "react";

import { ButtonDemo } from "./button-demo";
import { InputDemo } from "./input-demo";
import { CardDemo } from "./card-demo";
import { BadgeDemo } from "./badge-demo";
import { AvatarDemo } from "./avatar-demo";
import { SwitchDemo } from "./switch-demo";
import { SkeletonDemo } from "./skeleton-demo";
import { DialogDemo } from "./dialog-demo";
import { SelectDemo } from "./select-demo";
import { AccountPickerDemo } from "./account-picker-demo";
import { TokenCellDemo } from "./token-cell-demo";
import { TokenListDemo } from "./token-list-demo";
import { FooterNavDemo } from "./footer-nav-demo";
import { SortingDemo } from "./sorting-demo";
import { PayWithDemo } from "./pay-with-demo";
import { EmptyStateDemo } from "./empty-state-demo";
import { BannerDemo } from "./banner-demo";

export const ExamplesRegistry: Record<string, React.ComponentType> = {
  "button": ButtonDemo,
  "input": InputDemo,
  "card": CardDemo,
  "badge": BadgeDemo,
  "avatar": AvatarDemo,
  "switch": SwitchDemo,
  "skeleton": SkeletonDemo,
  "dialog": DialogDemo,
  "select": SelectDemo,
  "account-picker": AccountPickerDemo,
  "token-cell": TokenCellDemo,
  "token-list": TokenListDemo,
  "footer-nav": FooterNavDemo,
  "sorting": SortingDemo,
  "pay-with": PayWithDemo,
  "empty-state": EmptyStateDemo,
  "banner": BannerDemo,
};
