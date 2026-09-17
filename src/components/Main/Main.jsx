import { MainWrapperGeneral } from "../MainWrapperGeneral/MainWrapperGeneral";
import { MainWrapperSpecialization } from "../MainWrapperSpecialization/MainWrapperSpecialization";
import { MainWrapperWay } from "../MainWrapperWay/MainWrapperWay";
import { MainComercial } from "../MainComercial/MainComercial";
import { MainJobStep } from "../MainJobStep/MainJobStep";
import { MainSwitchCompany } from "../MainSwitchCompany/MainSwitchCompany";
import { MainSlider } from "../MainSlider/MainSlider";
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
