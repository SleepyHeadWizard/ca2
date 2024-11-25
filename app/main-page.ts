import { Application, EventData, ObservableArray, Page, TextField, Button, ListView } from "@nativescript/core";

// Define the data model
class InventoryViewModel {
    products: ObservableArray<{ name: string }>;
    newProductName: string;

    constructor() {
        this.products = new ObservableArray([]);
        this.newProductName = "";
    }

    addProduct() {
        const trimmedName = this.newProductName.trim();
        if (trimmedName) {
            this.products.push({ name: trimmedName });
            this.newProductName = ""; // Clear input field
        }
    }
}

// Create the view model instance
const inventoryViewModel = new InventoryViewModel();

// Page loaded event
export function onPageLoaded(args: EventData) {
    const page = args.object as Page;
    page.bindingContext = inventoryViewModel;
}

// Add product button tap event
export function onAddProductTap(args: EventData) {
    inventoryViewModel.addProduct();
}
