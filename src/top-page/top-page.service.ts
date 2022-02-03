import { Injectable } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { ObjectId } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';
import { CreateTopPageModelDto } from './dto/create-top-page.dto';
import { TopLevelCategory, TopPageModel } from './top-page.model';

@Injectable()
export class TopPageService {
	constructor(@InjectModel(TopPageModel) private readonly topPageModel: ModelType<TopPageModel>) {}

	async create(dto: CreateTopPageModelDto) {
		return this.topPageModel.create(dto);
	}

	async findById(id: ObjectId) {
		const a = await this.topPageModel.findOne(id).exec();
		console.log(a)
		// return this.topPageModel.findOne({ id }).exec();
	}

	async deleteByID(id: string) {
		const a = await this.topPageModel.findByIdAndRemove(id).exec();
		console.log(a);
		return this.topPageModel.findByIdAndRemove(id).exec();
	}

	async updateById(id: string, dto: CreateTopPageModelDto) {
		return this.topPageModel.findByIdAndUpdate(id, dto, { new: true }).exec();
	}	

	async findByCategory(firstCategory: TopLevelCategory) {
		return this.topPageModel.find({ firstCategory }, { 
			alias: 1,
			secondCategory: 1,
			title: 1
		 }).exec();
	}

	async findByAlias(alias: string) {
		return this.topPageModel.findOne({ alias }).exec();
	}
}
