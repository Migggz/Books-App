/* eslint-disable no-useless-escape */
import React, { useState } from "react"
import {
  Title,
  Form,
  Label,
  Input,
  Error,
  Split,
  StyledSelect,
  TextArea,
  ButtonsList,
  SubmitButton,
  CancelButton
} from "./BookFormPreview.styled"
import { useForm, Controller } from "react-hook-form"
import { onlyNumbers } from "../../utils/inputs-utils"
import { v4 } from "uuid"
import { find } from "lodash"

export default function BookFormPreview({ onSubmit, authors, categories, selectedBook, history }) {
  const [isbnValue, setIsbnValue] = useState(selectedBook ? selectedBook.isbn : "")
  const [pagesValue, setPagesValue] = useState(selectedBook ? selectedBook.pagesNumber : "")
  const [yearValue, setYearValue] = useState(selectedBook ? selectedBook.publishYear : "")
  const { register, handleSubmit, errors, control } = useForm()

  return (
    <section>
      <Title>{selectedBook ? selectedBook.title : "Add new Book"}</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <input
          hidden
          disabled
          type="text"
          name="id"
          defaultValue={selectedBook ? selectedBook.id : v4()}
          ref={register({ required: true })}
        />
        <Label>
          Title
          <Input
            name="title"
            defaultValue={selectedBook ? selectedBook.title : ""}
            ref={register({ required: true })}
          />
          {errors.title && <Error>This field is required</Error>}
        </Label>
        <Split>
          <Label>
            Category
            <Controller
              control={control}
              as={<StyledSelect />}
              name="category"
              rules={{ required: true }}
              defaultValue={
                selectedBook
                  ? find(categories, category => category.id === selectedBook.category)
                  : null
              }
              isSearchable={false}
              getOptionValue={category => category.id}
              getOptionLabel={category => category.name}
              options={categories}
              onChange={([selected]) => {
                return selected
              }}
            />
            {errors.category && <Error>This field is required</Error>}
          </Label>
          <Label>
            Author
            <Controller
              control={control}
              as={<StyledSelect />}
              name="author"
              rules={{ required: true }}
              defaultValue={
                selectedBook ? find(authors, author => author.id === selectedBook.author) : null
              }
              isSearchable={false}
              getOptionValue={author => author.id}
              getOptionLabel={author => author.name}
              options={authors}
              onChange={([selected]) => {
                return selected
              }}
            />
            {errors.author && <Error>This field is required</Error>}
          </Label>
        </Split>
        <Label>
          Description
          <TextArea
            name="description"
            defaultValue={selectedBook ? selectedBook.description : ""}
            ref={register({ required: true })}
          />
          {errors.description && <Error>This field is required</Error>}
        </Label>
        <Label>
          ISBN
          <Input
            value={isbnValue}
            onChange={e => setIsbnValue(onlyNumbers(e.target.value))}
            maxLength={13}
            type="text"
            name="isbn"
            ref={register({
              required: true,
              minLength: 13,
              maxLength: 13,
              validate: value => /^[0-9]+$/.test(value)
            })}
          />
          {errors.isbn ? (
            errors.isbn.type === "required" ? (
              <Error>This field is required</Error>
            ) : (
              <Error>ISBN Consists of 13 Digits</Error>
            )
          ) : (
            ""
          )}
        </Label>
        <Split>
          <Label>
            No. of Pages
            <Input
              value={pagesValue}
              onChange={e => setPagesValue(onlyNumbers(e.target.value))}
              maxLength={4}
              type="text"
              name="pagesNumber"
              ref={register({ required: true, validate: value => /^[0-9]+$/.test(value) })}
            />
            {errors.pagesNumber && <Error>This field is required</Error>}
          </Label>
          <Label>
            Year Published
            <Input
              value={yearValue}
              onChange={e => setYearValue(onlyNumbers(e.target.value))}
              maxLength={4}
              type="text"
              name="publishYear"
              ref={register({ required: true, validate: value => /^[0-9]+$/.test(value) })}
            />
            {errors.publishYear && <Error>This field is required</Error>}
          </Label>
        </Split>
        <Label>
          Image URL
          <Input
            defaultValue={selectedBook ? selectedBook.image : ""}
            name="image"
            type="url"
            ref={register({
              required: true,
              pattern: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
            })}
          />
          {errors.image ? (
            errors.image.type === "required" ? (
              <Error>This field is required</Error>
            ) : (
              <Error>Invalid Url</Error>
            )
          ) : (
            ""
          )}
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
