type Props = {
    params: {
          reviewId: string
    }
  }
  
  export default function reviewDetails({ params }: Props) {
    return (
          <h1>review of person{params.reviewId}</h1>
    )
  }