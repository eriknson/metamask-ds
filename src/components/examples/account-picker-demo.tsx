import { AccountPicker } from "@/components/metamask/account-picker";
import { ComponentPreview } from "@/components/ComponentPreview";

export function AccountPickerDemo() {
  return (
    <div className="space-y-6">
      <ComponentPreview
        title="Connected"
        description="Active account state"
        code={`<AccountPicker
  address="0x71C7656EC7ab88b098defB751B7401B5f6d8976F"
  name="Account 1"
/>`}
      >
        <AccountPicker
          address="0x71C7656EC7ab88b098defB751B7401B5f6d8976F"
          name="Account 1"
        />
      </ComponentPreview>

      <ComponentPreview
        title="Disconnected"
        description="State when no account is connected"
        code={`<AccountPicker
  address="0x71C7656EC7ab88b098defB751B7401B5f6d8976F"
  name="Account 1"
  status="disconnected"
/>`}
      >
        <AccountPicker
          address="0x71C7656EC7ab88b098defB751B7401B5f6d8976F"
          name="Account 1"
          status="disconnected"
        />
      </ComponentPreview>

      <ComponentPreview
        title="Default (No Name)"
        description="Connected state without a custom name"
        code={`<AccountPicker
  address="0x1234567890123456789012345678901234567890"
/>`}
      >
        <AccountPicker address="0x1234567890123456789012345678901234567890" />
      </ComponentPreview>

      <ComponentPreview
        title="Loading"
        description="Skeleton loading state"
        code={`<AccountPicker address="" isLoading />`}
      >
        <AccountPicker address="" isLoading />
      </ComponentPreview>
    </div>
  );
}
