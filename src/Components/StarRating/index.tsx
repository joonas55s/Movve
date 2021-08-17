import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';


interface props{
  note:number;
}
const StarRating: React.FC <props> = ({note}) => {
  const [value, setValue] = React.useState(note);

  return (
    <>    
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating name="read-only" value={value} readOnly size="small" />
      </Box>
    </>
  );
}

export default StarRating;