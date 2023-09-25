import { ImageList, ImageListItem } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

function VinylLabStudentGallery() {
  const media = useMediaQuery("(min-width:800px)");
  return (
    <ImageList sx={{ width: media ? 1000 : 500, mb: 5 }} cols={media ? 3 : 1}>
      {itemdata.map((item) => (
        <ImageListItem key={item.id}>
          <img src={`/images/${item.img}`} loading="lazy" />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default VinylLabStudentGallery;
