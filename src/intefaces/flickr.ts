export interface IPhoto {
  farm: number
  height_n: number
  id: string
  isfamily: number
  isfriend: number
  ispublic: number
  owner: string
  secret: string
  server: string
  title: string
  url_n: string
  width_n: number
}

export interface IPhotos {
  page: number
  pages: number
  perpage: number
  photo: IPhoto[]
  total: string
}

export interface IResult {
  photos: IPhotos
  stat: string
}
