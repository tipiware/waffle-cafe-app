import { html } from '@lib/utils';
import { allMenus } from '@constants/menu';
import { ProductsCategory } from './common/products-category';
import type { Menu } from '@lib/types/menu';

const menus: Readonly<Menu[]> = ['Original', 'Fruit', 'Seafood'];

export function Menu(): string {
  return html`
    <section
      id="menu"
      class="hidden-section grid min-h-screen content-center justify-items-center gap-12"
      data-index="3"
    >
      <div
        class="animated-element fade-bottom grid content-center gap-4 text-center"
      >
        <h2 class="section-title">Menu</h2>
        <p class="section-subtitle">
          Indulge in our diverse waffle menu, where every bite is a delightful adventure. Our Original Waffle Creations pay homage to tradition with warm, golden-brown waffles dusted with powdered sugar or drizzled in pure maple syrup. For those seeking a savory twist, our Seafood-inspired Waffle Delicacies unite succulent shrimp and cheddar, delicate smoked salmon and cream cheese, or the luxurious combination of lobster and hollandaise. Alternatively, embrace the natural sweetness of our Fresh Fruit Waffle Symphony, featuring waffles adorned with tropical fruit. 
        </p>
      </div>
      <div class="flex flex-wrap items-center justify-center gap-4">
        ${menus.reduce((acc, menu, index) => {
          const indexOfFour = 1 + (index % 4);
          const fadeDelayClass = `fade-delay-${indexOfFour * 100}`;

          return (
            acc +
            html`
              <div class="animated-element fade-bottom ${fadeDelayClass}">
                <button class="menu-button smooth-tab" id="${menu}">
                  ${menu}
                </button>
              </div>
            `
          );
        }, '')}
      </div>
      <div class="main-container md:min-h-[616px]">
        ${allMenus.reduce(
          (acc, { category, products }) =>
            acc + ProductsCategory({ category, products }),
          ''
        )}
      </div>
    </section>
  `;
}
