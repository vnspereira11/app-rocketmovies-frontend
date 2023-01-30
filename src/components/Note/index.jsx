import { Container } from "./styles";

import { Rating } from "../Rating";
import { Tag } from "../Tag";

export function Note({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      <Rating grade={data.rating} isBigSize={false}/>
      <p>{data.description}</p>
      {
        data.tags &&
          <footer>
            {
              data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
            }
          </footer>
      }
    </Container>
  );
};