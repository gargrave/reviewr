import * as React from 'react';
import {
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';

type Props = {
  errors: Review;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  review: Review;
};

const ReviewForm: React.SFC<Props> = ({
  errors,
  onInputChange,
  onSubmit,
  review,
}: Props) => (
  <Form onSubmit={onSubmit}>
    <FormGroup>
      <Label for="title">Title</Label>
      <Input
        bsSize="sm"
        name="title"
        onChange={onInputChange}
        placeholder="Review Title"
        type="text"
        invalid={!!errors.title}
        value={review.title}
      />
      <FormFeedback>{errors.title}</FormFeedback>
    </FormGroup>

    <FormGroup>
      <Label for="body">Body</Label>
      <Input
        bsSize="sm"
        name="body"
        onChange={onInputChange}
        placeholder="Write your expert opinion here..."
        type="textarea"
        invalid={!!errors.body}
        value={review.body}
      />
      <FormFeedback>{errors.body}</FormFeedback>
    </FormGroup>

    <Button type="submit">Submit</Button>
  </Form>
);

export default ReviewForm;
