import { IconAppContainer } from "./styled";
import climaIcon from "../../images/clima.png";

function NameAppIcon() {
  return (
    <IconAppContainer>
      <img src={climaIcon} alt="" />
      <h3>Weather Wise</h3>
    </IconAppContainer>
  );
}

export { NameAppIcon };
