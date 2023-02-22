// import { CheckIcon } from '@heroicons/react/outline'
import styles from "./Table.module.css"
import { Product } from '@stripe/firestore-stripe-payments'

interface Props {
  products: Product[]
  selectedPlan: Product | null
}

function Table({ products, selectedPlan }: Props) {
  return (
    <table>
      <tbody className="divide-y divide-[gray]">
        <tr className="tableRow">
          <td className={styles.tableDataTitle}>月額料金</td>
          {products.map((product) => (
            <td
              className={styles.price}
              key={product.id}
            >
              ¥{product.prices[0].unit_amount!}（税込）
            </td>
          ))}
        </tr>
        <tr className="tableRow">
          {/* <td className="tableDataTitle">Video quality</td> */}
          {products.map((product) => (
            <td
              className={`tableDataFeature ${selectedPlan?.id === product.id
                ? 'text-[#E50914]'
                : 'text-[gray]'
                }`}
              key={product.id}
            >
              {product.metadata.videoQuality}
            </td>
          ))}
        </tr>
        <tr className="tableRow">
          {/* <td className="tableDataTitle">Resolution</td> */}
          {products.map((product) => (
            <td
              className={`tableDataFeature ${selectedPlan?.id === product.id
                ? 'text-[#E50914]'
                : 'text-[gray]'
                }`}
              key={product.id}
            >
              {product.metadata.resolution}
            </td>
          ))}
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">
            PC・スマホ・タブレットどの端末でも利用できます。
          </td>
          {products.map((product) => (
            <td
              className={`tableDataFeature ${selectedPlan?.id === product.id
                ? 'text-[#E50914]'
                : 'text-[gray]'
                }`}
              key={product.id}
            >
              {/* {product.metadata.portability === 'true' && (
                <CheckIcon className="inline-block h-8 w-8" />
              )} */}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  )
}

export default Table
