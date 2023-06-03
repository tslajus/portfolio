import { keyGen, getTotalGrids } from "@/helpers";
import { Grid } from "@/layout";

type PageTemplateProps = {
  data: {
    totalGrids: number;
    totalGridsMd: number;
    totalGridsSm: number;
    totalGridsXs: number;
  };
  elements: () => Array<{
    gridSize: number;
    element: React.ReactNode;
  }>;
  pageId: string;
};

function PageTemplate({ data, elements, pageId }: PageTemplateProps) {
  const totalGrids = getTotalGrids(
    data.totalGrids,
    data.totalGridsMd,
    data.totalGridsSm,
    data.totalGridsXs
  );

  const filledGrids = elements().map((element) => element.gridSize);

  const renderedElements = elements().map((element) => element.element);

  return (
    <Grid
      totalGrids={totalGrids}
      filledGrids={filledGrids}
      id={pageId}
      key={keyGen()}
    >
      {renderedElements}
    </Grid>
  );
}

export default PageTemplate;
