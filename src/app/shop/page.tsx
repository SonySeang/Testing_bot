import Card from '@/components/shop/Card'
import React from 'react'

export default function Main() {
  return (
    <div>
      This is main componet
      <div className="flex flex-wrap justify-center">
        <Card
          title="Product 1"
          description="This is the description of the first product."
          price="$19.99"
          imageUrl="https://via.placeholder.com/150"
        />
        <Card
          title="Product 2"
          description="This is the description of the second product."
          price="$29.99"
          imageUrl="https://via.placeholder.com/150"
        />
        <Card
          title="Product 3"
          description="This is the description of the third product."
          price="$39.99"
          imageUrl="https://via.placeholder.com/150"
        />
      </div>
    </div>
  );
}
