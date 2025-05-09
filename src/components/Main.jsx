import { MainWrapperGeneral } from "./MainWrapperGeneral";
import { MainWrapperSpecialization } from "./MainWrapperSpecialization";
import { MainWrapperWay } from "./MainWrapperWay";
import { MainComercial } from "./MainComercial";
import { MainJobStep } from "./MainJobStep";
import { MainSwitchCompany } from "./MainSwitchCompany";
import { MainSlider } from "./MainSlider";
export function Main() {
  return (
    <>
      <MainWrapperGeneral />
      <MainWrapperSpecialization />
      <MainWrapperWay />
      <MainComercial />
      <MainJobStep />
      <MainSwitchCompany />
      <MainSlider />
    </>
  );
}
