import { StatusBar } from "expo-status-bar";
import { RecoilRoot } from "recoil";

import Navigator from "./src/routes";
import "./src/utils/interceptorService";

export default function App() {
  return (
    <>
      <RecoilRoot>
        <StatusBar style="auto" />
        <Navigator />
      </RecoilRoot>
    </>
  );
}
