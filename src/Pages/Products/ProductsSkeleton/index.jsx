import { Skeleton } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

export default function ProductsSkeleton() {
  return (
    <Card sx={{ width: 300, height: 370 }}>
      <Skeleton
        width={"100%"}
        height={"50%"}
        variant={"rectangular"}
        animation={"wave"}
      />
      <CardContent>
        <Skeleton width={"100%"} height={"50px"} animation={"wave"} />
        <Skeleton width={"50%"} height={"25px"} animation={"wave"} />
      </CardContent>
      <CardActions>
        <Skeleton
          width={"50%"}
          height={"50px"}
          variant={"rounded"}
          animation={"wave"}
        />
      </CardActions>
    </Card>
  );
}
