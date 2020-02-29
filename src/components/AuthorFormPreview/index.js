import React from "react"
import {
  Title,
  Form,
  Label,
  Input,
  Error,
  TextArea,
  ButtonsList,
  SubmitButton,
  CancelButton
} from "./../BookFormPreview/BookFormPreview.styled"
import { useForm } from "react-hook-form"
import { v4 } from "uuid"

export default function AuthorFormPreview({ onSubmit, selectedAuthor, history }) {
  const { register, handleSubmit, errors } = useForm()

  return (
    <section>
      <Title>{selectedAuthor ? "Edit Author: " + selectedAuthor.name : "Add new Author"}</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <input
          hidden
          disabled
          type="text"
          name="id"
          defaultValue={selectedAuthor ? selectedAuthor.id : v4()}
          ref={register({ required: true })}
        />
        <Label>
          Name
          <Input
            name="name"
            defaultValue={selectedAuthor ? selectedAuthor.name : ""}
            ref={register({ required: true })}
          />
          {errors.name && <Error>This field is required</Error>}
        </Label>
        <Label>
          Job Title
          <Input
            name="jobTitle"
            defaultValue={selectedAuthor ? selectedAuthor.jobTitle : ""}
            ref={register({ required: true })}
          />
          {errors.jobTitle && <Error>This field is required</Error>}
        </Label>
        <Label>
          Bio
          <TextArea
            name="bio"
            defaultValue={selectedAuthor ? selectedAuthor.bio : ""}
            ref={register({ required: true })}
          />
          {errors.bio && <Error>This field is required</Error>}
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
