'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'
import { Column } from '@tanstack/react-table'
import React from 'react'

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>
  title: string
}

export default function FacetedFilter<TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  const sortedUniqueValues = React.useMemo(() => {
    return Array.from(column.getFacetedUniqueValues().keys())
      .sort()
      .slice(0, 5000)
  }, [column.getFacetedUniqueValues(), column])

  return (
    <Select
      onValueChange={(value) =>
        column.setFilterValue(value === 'all' ? '' : value)
      }
    >
      <SelectTrigger className={cn(className)}>
        <SelectValue placeholder={title} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value={'all'}>All</SelectItem>
        {sortedUniqueValues.map((artist) => (
          <SelectItem key={artist} value={artist}>
            {artist}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
