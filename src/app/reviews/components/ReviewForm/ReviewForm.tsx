import * as React from 'react'
import { Form, FormFeedback, FormGroup, Input, Label } from 'reactstrap'

import Button, { ButtonNativeType } from 'app/common/Button/Button'

interface IProps {
  errors: Review
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  review: Review
}

const ReviewForm: React.SFC<IProps> = ({
  errors,
  onInputChange,
  onSubmit,
  review,
}: IProps) => (
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

    <Button type={ButtonNativeType.Submit}>Submit</Button>
  </Form>
)

export default ReviewForm
