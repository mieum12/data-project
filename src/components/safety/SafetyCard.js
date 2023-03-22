import * as S from "./SafetyCard.style";
import { Box } from "../../components";
import { PRIMARY_COLOR } from "../../styles/color";

export const SafetyCard = ({ cardTitle, safetyEmoji, description }) => {
  return (
    <S.PlusList>
      <div className="BoxList">
        <Box
          backColor={PRIMARY_COLOR}
          // boxImage={}
          boxNumber="a동"
          boxText={
            "해당 지역은 재난 피해 대비 \n수용시설이 80% 존재하여\n  안전도는 좋음 입니다."
          }
        />
        <Box
          backColor={PRIMARY_COLOR}
          // boxImage={}
          boxNumber="b동"
          boxText={
            "해당 지역은 재난 피해 대비 \n수용시설이 80% 존재하여\n  안전도는 좋음 입니다."
          }
        />
        <Box
          backColor={PRIMARY_COLOR}
          // boxImage={}
          boxNumber="c동"
          boxText={
            "해당 지역은 재난 피해 대비 \n수용시설이 80% 존재하여\n  안전도는 좋음 입니다."
          }
        />
      </div>
    </S.PlusList>
  );
};
