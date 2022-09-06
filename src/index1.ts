interface BaseParams<IDType = number> {
  id: IDType
}

interface DogDetails {
  name: string
  breed: DogBreed
  adopted_at: Date | null
  birth_date: Date | null
}

interface APIResponse<Data> {
  data: Data
  message: string
}

interface Pagination {
  page: number
  limit: number
  breed: DogBreed
}

interface Empty {

}

type DogBreed = 'labrador' | 'german shepherd' | 'golden retriever'

type Dog = BaseParams & DogDetails
