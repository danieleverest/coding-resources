# data

## user

- user_id: string unique
- username: string
- links: [linkId]
- saved: [linkId]

## links

- link_id: string unique
- link: string
- submittedBy: user_id
- comments: [comment_id]
- tags: [tag_id]
- ranking

## comments

- comment_id: string
- comment: string
- replies: [comment_id]

## tags

- tag_id: string
- tag_name: stirng

# views

## subject

- list of submissions
- submissions can be clicked to view comments
- filter/search by tag

## submission

- link
- ranking
- list of comments
- submit new comment
- save submission

## auth

- login/signup
- auth required to:

  - submit a link
  - submit a comment
  - rank a link
  - save a link
