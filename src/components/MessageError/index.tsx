import { ErrorMessageContainer } from "./styled";
import { RiErrorWarningLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";

function MessageError() {
  const [t] = useTranslation("global");
  return (
    <ErrorMessageContainer>
      <RiErrorWarningLine className="errorMessageIcon" />
      <span className="errorMessage">
        {t("weatherResult.message-error.first")}
        <br />
        {t("weatherResult.message-error.second")}
      </span>
    </ErrorMessageContainer>
  );
}

export { MessageError };
