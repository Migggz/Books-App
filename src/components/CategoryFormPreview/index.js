import React from "react"
import {
  Title,
  Form,
  Label,
  Input,
  Error,
  ButtonsList,
  SubmitButton,
  CancelButton
} from "./../BookFormPreview/BookFormPreview.styled"
import { useForm } from "react-hook-form"
import { v4 } from "uuid"

export default function CategoryFormPreview({ onSubmit, selectedCategory, history }) {
  const { register, handleSubmit, errors } = useForm()

  return (
    <section>
      <Title>
        {selectedCategory ? "Edit Category: " + selectedCategory.name : "Add new Category"}
      </Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <input
          hidden
          disabled
          type="text"
          name="id"
          defaultValue={selectedCategory ? selectedCategory.id : v4()}
          ref={register({ required: true })}
        />
        <Label>
          Name
          <Input
            name="name"
            defaultValue={selectedCategory ? selectedCategory.name : ""}
            ref={register({ required: true })}
          />
          {errors.name && <Error>This field is required</Error>}
        </Label>
        <ButtonsList>
          <SubmitButton type="submit" value="Save" />
          <CancelButton type="button" onClick={() => history.goBack()}>
            Cancel
          </CancelButton>
        </ButtonsList>
      </Form>
    </section>
  )
}
