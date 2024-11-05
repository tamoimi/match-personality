import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useTranslation } from "react-i18next";

const LanguageBar = () => {
  // ===================================================================================================================
  // language handler
  // ===================================================================================================================
  const { i18n } = useTranslation();

  return (
    <>
      {/* menu bar */}
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>🌐</MenubarTrigger>
          <MenubarContent>
            <MenubarItem onClick={() => i18n.changeLanguage("en")}>EN</MenubarItem>
            <MenubarSeparator />
            <MenubarItem onClick={() => i18n.changeLanguage("ko")}>KO</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </>
  );
};
export default LanguageBar;
