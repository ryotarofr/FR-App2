// import { CheckIcon } from '@heroicons/react/outline'
import styles from "./Plans.module.css"
import { Product } from '@stripe/firestore-stripe-payments'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import useAuth from '../../hooks/useAuth'
import { loadCheckout } from '../../lib/stripe'
import Table from '../Table/Table'
import Loader from '../Loader'
// import { Radio } from "@mui/material"

interface Props {
  products: Product[]
}

function Plans({ products }: Props) {
  const { logout, user } = useAuth()
  const [selectedPlan, setSelectedPlan] = useState<Product | null>(products[2])
  const [isBillingLoading, setBillingLoading] = useState(false)

  console.log(products)

  const subscribeToPlan = () => {
    if (!user) return

    loadCheckout(selectedPlan?.prices[0].id!)
    setBillingLoading(true)
  }

  return (
    <div>
      {/* <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <header className={styles.header}>
        <div className={styles.margin}>
          <Link href="/">
            <div className={styles.logo}>
              FR
              <span className={styles.logoSpan}>.dev</span>
            </div>

          </Link>
          <p
            className={styles.logoutButton}
            onClick={logout}
          >
            Sign Out
          </p>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.mainMargin}>
          <h1 className="mb-3 text-3xl font-medium">
            プランを選択してください
          </h1>
          <ul>
            <li className="flex items-center gap-x-2 text-lg">
              {/* <CheckIcon className="h-7 w-7 text-[#E50914]" /> Watch all you want. */}
              コンテンツの購読が自由にできます。
            </li>
            <li className="flex items-center gap-x-2 text-lg">
              {/* <CheckIcon className="h-7 w-7 text-[#E50914]" /> Recommendations */}
              あなたへおすすめを紹介します。
            </li>
            <li className="flex items-center gap-x-2 text-lg">
              {/* <CheckIcon className="h-7 w-7 text-[#E50914]" /> Change or cancel */}
              いつでも解約可能です。
            </li>
          </ul>

          <div className="mt-4 flex flex-col space-y-4">
            <div className="flex w-full items-center justify-end self-end md:w-3/5">
              {products.map((product) => (
                <>
                  <div className={styles.productFlex}>
                    <input
                      type="radio"
                      className={styles.radio}
                      key={product.id}
                      onClick={() => setSelectedPlan(product)}
                    />
                    {/* {product.name}s */}

                    <div className={styles.productName}>{product.name}</div>
                  </div>
                </>
              ))}
            </div>
            <hr />
            <Table products={products} selectedPlan={selectedPlan} />

            <button
              disabled={!selectedPlan || isBillingLoading}
              className={styles.subscribe
              }
              onClick={subscribeToPlan}
            >
              {isBillingLoading ? (
                <Loader color="dark:fill-gray-300" />
              ) : (
                'Subscribe'
              )}
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Plans
