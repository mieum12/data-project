import Header from "../../components/Header";
import { ShelterMap, ShelterList } from "../../components/shelter";
import * as S from "./Shelter.style";

function Shelter() {
  return (
    <div>
      <Header />
      <S.FlexContainer>
        <ShelterMap />
        <ShelterList />
      </S.FlexContainer>
    </div>
  );
}

export default Shelter;
