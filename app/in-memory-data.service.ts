export class InMemoryDataService {

	createDb() {

		let departments = [
			{id: 1, name: 'Human Resource'},
		    {id: 2, name: 'Finance'},
		    {id: 3, name: 'Marketing'},
		    {id: 4, name: 'Sales'},
		    {id: 5, name: 'IT'},
		];

		let employees = [
			{id: 1, firstName: 'Khiem', middleName: 'Viet Duy', lastName: 'Nguyen', jobTitle: 'Senior ASP.NET Developer', avatar: 'avatar-02.png', departmentId: '5'},
			{id: 2, firstName: 'Nam', middleName: 'Duy', lastName: 'Vu', jobTitle: 'Business Performance Executive', avatar: 'avatar-02.png', departmentId: '2'},
			{id: 3, firstName: 'Bao', middleName: 'Quang', lastName: 'Le', jobTitle: 'HR Excutive', avatar: 'avatar-02.png', departmentId: '1'},
			{id: 4, firstName: 'Huy', middleName: 'Duc', lastName: 'Ha', jobTitle: 'Commercial Director', avatar: 'avatar-02.png', departmentId: '3'},
			{id: 5, firstName: 'Thang', middleName: 'Ngoc', lastName: 'Nguyen', jobTitle: 'Key Account', avatar: 'avatar-02.png', departmentId: '4'},
			{id: 6, firstName: 'Huyen', middleName: 'Thi Thanh', lastName: 'Pham', jobTitle: 'Corporate Affairs', avatar: 'avatar-02.png', departmentId: '1'},
		];

		return { departments, employees };
	}
}