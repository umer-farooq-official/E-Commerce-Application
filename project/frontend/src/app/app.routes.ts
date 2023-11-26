import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { CompareComponent } from './compare/compare.component';
import { ContactComponent } from './contact/contact.component';
import { EmptyCartComponent } from './empty-cart/empty-cart.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { ShopListLeftSidebarComponent } from './shop-list-left-sidebar/shop-list-left-sidebar.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { WishlistComponent } from './wishlist/wishlist.component';

export const routes: Routes = [
    {path: '',component:IndexComponent},
    {path: 'header',component:HeaderComponent},
    {path: 'footer',component:FooterComponent},
    {path: 'about', component:AboutComponent},
    {path: 'comingsoon', component:ComingSoonComponent},
    {path: 'emptycart', component:EmptyCartComponent},
    {path: 'shop', component:ShopListLeftSidebarComponent},
    {path: 'login', component:LoginComponent},
    {path: 'cart', component:CartComponent},
    {path: 'checkout', component:CheckoutComponent},
    {path: 'compare', component:CompareComponent},
    {path: 'contact', component:ContactComponent},
    {path: 'index', component:IndexComponent},
    {path: 'myaccount', component:MyAccountComponent},
    {path: 'singleproduct', component:SingleProductComponent},
    {path: 'wishlist', component:WishlistComponent}
];
