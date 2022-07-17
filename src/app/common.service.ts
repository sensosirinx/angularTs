import { Injectable } from '@angular/core'
import DataUtils from '../app/utils/dataUtils'
import { ItemsType } from './elements/elements.component.types'
import { Observable, BehaviorSubject } from 'rxjs'


@Injectable({
  providedIn: 'root'
})

export class CommonService {
  private dataUtils: DataUtils
  private item = new BehaviorSubject<ItemsType | null>(null)
  private store = new BehaviorSubject<Array<ItemsType>>([])

  constructor () {
    this.dataUtils = new DataUtils()
  }

  get utils () {
    return this.dataUtils
  }

  loadData = async (): Promise<void> => {
    const data = await this.utils.makeDefaultData()
    this.item.next(null)
    this.store.next(data)
  }

  get getData (): Observable<ItemsType[]> {
    return this.store
  }

  addData = (value: ItemsType): void => {
    const data: Array<ItemsType> = this.store.value
    data.push(value)
    this.store.next(data)
  }

  updateData = (value: ItemsType): void => {
    const updatedData: Array<ItemsType> = this.store.value.map((item: ItemsType) => {
      if (item.id === value.id) {
        item = value
      }
      return item
    })
    this.store.next(updatedData)
  }

  getUniqTags (): Array<string> {
    if (this.store.value.length > 0) {
      let tagList = []
      this.store.value.forEach((item) => {
        const tags = item.tags
        if (tags && tags.length > 0) {
          const tagsList = tags.filter((tag) => {
            return tagList.indexOf(tag) === -1
          })
          tagList = tagList.concat(tagsList)
        }
      })
      return tagList
    }
    return []
  }

  setItem = (value: ItemsType): void => {
    this.item.next(value)
  }

  get getItem (): Observable<ItemsType | null> {
    return this.item
  }


}
