import React from 'react';

import styles from './page.module.scss';

import CustomCocktailIngredientCardWrapper from '../../../../../components/custom-cocktail/CustomCocktailIngredientCardWrapper';

import CustomCocktailDeleteButton from '@/components/custom-cocktail/CustomCocktailDeleteButton';
import CustomCocktailImage from '@/components/custom-cocktail/CustomCocktailImage';
import CustomCocktailInfo from '@/components/custom-cocktail/CustomCocktailInfo';
import CustomCocktailModifyButton from '@/components/custom-cocktail/CustomCocktailModifyButton';
import CustomCocktailRecipe from '@/components/custom-cocktail/CustomCocktailRecipe';

interface IngredientsList {
  ingredient: {
    id: number;
    name: string;
    image: string;
  };
  ingredient_amount: number;
  unit: {
    id: number;
    name: string;
  };
}

interface CustomDetailData {
  user: {
    id: number;
    name: string;
  };
  cocktail: {
    id: number;
    name: string;
  };
  id: number;
  name: string;
  image: string;
  recipe: string;
  summary: string;
  comment: string;
  custom_cocktail_ingredients: IngredientsList[];
  open: boolean;
}

interface Ingredient {
  id: number;
  name: string;
  image: string;
  category: {
    id: number;
    name: string;
  };
}

interface StoreData {
  ingredients: Ingredient[];
}

export default function Page() {
  const customDetailData: CustomDetailData = {
    user: {
      id: 1,
      name: '끼리코',
    },
    cocktail: {
      id: 1,
      name: '애플 마티니',
    },
    id: 1,
    name: '날씨 좋은 주말을 위한 애플 마티니',
    image:
      'https://images.absolutdrinks.com/drink-images/Raw/Absolut/21785b5c-9d47-40bf-97af-373882e2e5b1.jpg?imwidth=375',
    recipe:
      '1. 먼저 얼음으로 하이볼 글라스를 차갑게 만들어주세요.|2. 앱솔루트 망고 크란베리 주스와 오랜지 주스를 부어 넣어주세요.|3. 모든 재료를 조심스레 섞어주세요.|4. 망고 웨지로 가니쉬를 해주어 장식해 주세요.|5. 짜잔 이제 당신만의 망고 브리즈를 즐길 수 있게 되었습니다 망고 브리즈는 단순히 음료가 아니에요 햇볕이 피부를 따스히 감싸고 모래사장이 있는 푸른 바다 위에서 해먹에 누워있는 듯한 경험을 선사해 주죠.|6. 따라서 특별한 기념일을 축하하거나 아무때나 마시세요.',
    summary: '원래 안 들어가는 레몬과 리큐르를 넣었어요',
    comment:
      '집에 다른 칵테일 만들다 남은 레몬이랑 레몬 리큐르가 애매하게 남아서한 번 넣어봤는데 원래 먹던 것보다 상큼하고 사람들이 좀 더 대중적으로 좋아할 것 같은 맛이 된 것 같아요 ㅋㅋ 둘 중 하나만 넣어도 괜찮을 것 같고... 재레몬 넣으시는 거 추천 드립니다!',
    custom_cocktail_ingredients: [
      {
        ingredient: {
          id: 1,
          name: '사과',
          image:
            'https://kr.object.ncloudstorage.com/dalkak/basic/cb86f720-74fc-4497-8d4b-a703de8088e3.png',
        },
        ingredient_amount: 50,
        unit: {
          id: 1,
          name: '조각',
        },
      },
      {
        ingredient: {
          id: 2,
          name: '레몬',
          image:
            'https://kr.object.ncloudstorage.com/dalkak/basic/46e98c37-db68-442f-b533-0cebbc9224de.png',
        },
        ingredient_amount: 3,
        unit: {
          id: 2,
          name: '슬라이스',
        },
      },
      {
        ingredient: {
          id: 3,
          name: '얼음',
          image:
            'https://kr.object.ncloudstorage.com/dalkak/basic/22b57041-b96b-4a3e-a35f-da404a509551.png',
        },
        ingredient_amount: 100,
        unit: {
          id: 3,
          name: '그램',
        },
      },
      {
        ingredient: {
          id: 4,
          name: '레몬 리큐르',
          image:
            'https://kr.object.ncloudstorage.com/dalkak/basic/6786e8b2-814b-40ff-894a-50dd7e42a40a.png',
        },
        ingredient_amount: 5,
        unit: {
          id: 4,
          name: 'ml',
        },
      },
      {
        ingredient: {
          id: 5,
          name: '사과 리큐르',
          image:
            'https://kr.object.ncloudstorage.com/dalkak/basic/6786e8b2-814b-40ff-894a-50dd7e42a40a.png',
        },
        ingredient_amount: 15,
        unit: {
          id: 4,
          name: 'ml',
        },
      },
      {
        ingredient: {
          id: 6,
          name: '쿠앵트로',
          image:
            'https://kr.object.ncloudstorage.com/dalkak/basic/6786e8b2-814b-40ff-894a-50dd7e42a40a.png',
        },
        ingredient_amount: 15,
        unit: {
          id: 4,
          name: 'ml',
        },
      },
      {
        ingredient: {
          id: 7,
          name: '보드카',
          image:
            'https://kr.object.ncloudstorage.com/dalkak/basic/2f1cb4d3-6fb7-4909-8b91-865b7d156c9a.png',
        },
        ingredient_amount: 40,
        unit: {
          id: 4,
          name: 'ml',
        },
      },
    ],
    open: true,
  };

  const storeData: StoreData = {
    ingredients: [
      {
        id: 2,
        name: '레몬',
        image:
          'https://kr.object.ncloudstorage.com/dalkak/basic/46e98c37-db68-442f-b533-0cebbc9224de.png',
        category: {
          id: 2,
          name: 'fruit',
        },
      },
      {
        id: 3,
        name: '얼음',
        image:
          'https://kr.object.ncloudstorage.com/dalkak/basic/22b57041-b96b-4a3e-a35f-da404a509551.png',
        category: {
          id: 3,
          name: 'beverage',
        },
      },
      {
        id: 7,
        name: '보드카',
        image:
          'https://kr.object.ncloudstorage.com/dalkak/basic/2f1cb4d3-6fb7-4909-8b91-865b7d156c9a.png',
        category: {
          id: 1,
          name: 'alcohol',
        },
      },
      {
        id: 8,
        name: '어쩌고',
        image:
          'https://kr.object.ncloudstorage.com/dalkak/basic/2f1cb4d3-6fb7-4909-8b91-865b7d156c9a.png',
        category: {
          id: 1,
          name: 'alcohol',
        },
      },
    ],
  };

  const ingredientsList = customDetailData.custom_cocktail_ingredients;

  const storeList = storeData.ingredients;

  return (
    <div className={styles['flex-container']}>
      <div className={styles.container}>
        <div className={styles['title-container']}>
          <div className={styles.name}>{customDetailData.name}</div>
          <div className={styles.nickname}>
            by&nbsp;{customDetailData.user.name}
          </div>
          <div />

          <div className={styles.buttons}>
            <div className={styles.button}>
              <CustomCocktailModifyButton />
            </div>
            <div className={styles['divide-line']}>|</div>
            <div className={styles.button}>
              <CustomCocktailDeleteButton />
            </div>
          </div>
        </div>

        <hr className={styles.hr} />
        <div className={styles['inner-container']}>
          <div className={styles.space}>
            <CustomCocktailImage customImage={customDetailData.image} />
            <div className={styles['info-container']}>
              <CustomCocktailInfo cocktail={customDetailData.cocktail.name} />
              <CustomCocktailInfo summary={customDetailData.summary} />
              <CustomCocktailInfo comment={customDetailData.comment} />
            </div>
          </div>
          <div className={styles.space}>
            <CustomCocktailIngredientCardWrapper
              ingredients={ingredientsList}
              storeData={storeList}
            />
            <CustomCocktailRecipe recipe={customDetailData.recipe} />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const dummyCocktailId = [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
  ];

  return dummyCocktailId.map((cocktail) => ({
    customId: cocktail.id.toString(),
  }));
}