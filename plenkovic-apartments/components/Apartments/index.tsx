import ApartmentDetail from "@c/Apartments/Detail";
import { PositionEnum } from "@e/position";
import useAnimationEffect from "@h/useAnimationEffect";
import useIsMobile from "@h/useIsMobile";
import { Grid, Typography } from "@mui/material";
import { ApartmentsPageProps } from "@p/apartments";

export default function Apartments({ apartments }: ApartmentsPageProps) {
  const animationEffect = useAnimationEffect();
  const isMobile = useIsMobile();

  return (
    <main>
      <Typography
        my={5}
        variant={"h3"}
        component={"h1"}
        color={isMobile ? "inherit" : "primary"}
      >
        Apartments
      </Typography>
      <Grid container spacing={10}>
        {apartments.map((props, index) => (
          <Grid
            item
            xs={12}
            key={index}
            data-aos={`${animationEffect}-${
              index % 2 !== 0 ? PositionEnum.LEFT : PositionEnum.RIGHT
            }`}
          >
            <ApartmentDetail {...props} index={index} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}
