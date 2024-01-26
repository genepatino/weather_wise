import { ErrorMessageContainer } from "./styled";
import { RiErrorWarningLine } from "react-icons/ri";

function MessageError() {
  return (
    <ErrorMessageContainer>
      <RiErrorWarningLine className="errorMessageIcon" />
      <span className="errorMessage">
        No hemos encontrado una ciudad
        <br /> que coincida con tu búsqueda.
      </span>
    </ErrorMessageContainer>
  );
}

export { MessageError };
