import React from 'react'
import { programs } from '../../data'

import { Card, Link } from "@heroui/react";

export const Programs = () => {
  return (
    <div>
      <h2>Iskolai programok</h2>

      <div  className="max-w-6xl mx-auto mt-6 pt-6 border border-gray-400 rounded-xl">
        {programs.map(
          ({
            id,
            title,
            category,
            price,
            participants,
            capacity,
            indoor,
          }) => (
            <Card className="w-[400px]" key={id}>
              <img className="text-primary size-6 flex" role="img" />
              <Card.Header>
                <Card.Title>{title}</Card.Title>
                <Card.Description>
                  Kategória:  {category} - Ár: {price}Ft
                </Card.Description>
                <Card.Content>
                  Maximális létszám: {capacity}
                  Szabadhelyek száma: {capacity - participants}
                  {indoor}
                </Card.Content>
              </Card.Header>

            </Card>
          )

        )} </div>
    </div>
  )
}
