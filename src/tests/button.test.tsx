import { Button } from '@/components/ui/button'
import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

describe('Button test', () => {
  test('Should show label', () => {
    render(
      <Button title="Testing">
        <h4>Content</h4>
      </Button>,
    )

    expect(screen.getByTitle('Testing')).toBeDefined()
    expect(screen.getByText('Content')).toBeDefined()
  })
})
