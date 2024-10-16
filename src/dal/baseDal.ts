interface ApiData {
    id: string;
    name: string;
}

interface DropdownItem {
    value: string;
    displayName: string;
}

class BaseDal<T extends ApiData, U extends DropdownItem> {
    fromDal(data: Array<T>): Array<U> {
        return data.map((item) => ({
            value: item.id,
            displayName: item.name
        })) as Array<U>;
    }
}
