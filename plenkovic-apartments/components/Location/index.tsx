import LocationSection from "@c/Location/Section";
import { PositionEnum } from "@e/position";
import useIsMobile from "@h/useIsMobile";
import { Grid, Typography } from "@mui/material";
import { LocationPageProps } from "@p/location";

export default function Location({ title, sections }: LocationPageProps) {
  const isMobile = useIsMobile();

  return (
    <main>
      <Typography
        my={5}
        variant={"h3"}
        component={"h1"}
        color={isMobile ? "inherit" : "primary"}
      >
        {title}
      </Typography>
      <Grid container spacing={6} mb={10}>
        {sections.map((props, index) => (
          <Grid item xs={12} key={index}>
            <LocationSection
              imagePosition={
                index % 2 === 0 ? PositionEnum.LEFT : PositionEnum.RIGHT
              }
              {...props}
            />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}
