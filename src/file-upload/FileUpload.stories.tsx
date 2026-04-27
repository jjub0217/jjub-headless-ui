import type { Meta, StoryObj } from '@storybook/react'
import { FileUpload, useFileUpload } from './index'

/**
 * FileUpload 컴포넌트 구조:
 *
 * useFileUpload() — 파일 상태 관리 훅 (유효성 검사, 미리보기 URL 관리)
 * FileUpload.Root — 컨텍스트 제공자 (files, addFiles, removeFile 주입)
 * FileUpload.Dropzone — 드래그 앤 드롭 영역 (role="button")
 * FileUpload.Input — 숨겨진 파일 input (aria-hidden)
 * FileUpload.Preview — 업로드된 파일 목록 (role="list")
 * FileUpload.Item — 개별 파일 항목 (role="listitem")
 *
 * data-state:
 * - Dropzone[data-state="dragging"]: 드래그 오버 중
 * - Dropzone[data-state="idle"]: 기본 상태
 */

const meta = {
  title: 'Components/FileUpload',
  decorators: [
    (Story) => (
      <>
        <style>{`
          .dropzone {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 8px;
            padding: 32px;
            border: 2px dashed #d1d5db;
            border-radius: 12px;
            cursor: pointer;
            text-align: center;
            transition: border-color 0.2s, background 0.2s;
            min-height: 120px;
            background: #fafafa;
          }
          .dropzone[data-state="dragging"] {
            border-color: #3b82f6;
            background: #eff6ff;
          }
          .dropzone[data-disabled] {
            opacity: 0.5;
            cursor: not-allowed;
          }
          .dropzone:focus-visible {
            outline: 2px solid #3b82f6;
            outline-offset: 2px;
          }
          .dropzone-icon {
            font-size: 32px;
            line-height: 1;
          }
          .dropzone-text {
            font-size: 14px;
            color: #374151;
          }
          .dropzone-hint {
            font-size: 12px;
            color: #9ca3af;
          }
          .file-list {
            list-style: none;
            padding: 0;
            margin: 12px 0 0;
            display: flex;
            flex-direction: column;
            gap: 6px;
          }
          .file-item {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 8px 12px;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            background: white;
          }
          .file-preview-img {
            width: 40px;
            height: 40px;
            object-fit: cover;
            border-radius: 4px;
            flex-shrink: 0;
          }
          .file-name {
            flex: 1;
            font-size: 13px;
            color: #374151;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .file-size {
            font-size: 12px;
            color: #9ca3af;
            flex-shrink: 0;
          }
          .file-remove-btn {
            border: none;
            background: none;
            cursor: pointer;
            color: #9ca3af;
            font-size: 16px;
            line-height: 1;
            padding: 2px 6px;
            border-radius: 4px;
            flex-shrink: 0;
          }
          .file-remove-btn:hover {
            background: #fee2e2;
            color: #ef4444;
          }
          .file-remove-btn:focus-visible {
            outline: 2px solid #3b82f6;
            outline-offset: 1px;
          }
          .error-list {
            margin: 8px 0 0;
            padding: 0;
            list-style: none;
          }
          .error-item {
            font-size: 12px;
            color: #ef4444;
            padding: 2px 0;
          }
        `}</style>
        <Story />
      </>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'Headless FileUpload 컴포넌트. 드래그 앤 드롭과 클릭 업로드를 모두 지원합니다. useFileUpload() 훅으로 파일 유효성 검사와 미리보기 URL을 관리하고, 비즈니스 로직(압축, 서버 업로드)은 직접 구현합니다.',
      },
    },
  },
} satisfies Meta

export default meta

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

/**
 * 기본 파일 업로드.
 *
 * 클릭 또는 드래그 앤 드롭으로 파일을 추가합니다.
 * 업로드된 파일은 목록에 표시됩니다.
 */
export const Default: StoryObj = {
  name: 'Default',
  render: () => {
    const DefaultExample = () => {
      const { files, errors, addFiles, removeFile } = useFileUpload({ multiple: true })

      return (
        <div style={{ width: '400px' }}>
          <FileUpload.Root files={files} addFiles={addFiles} removeFile={removeFile} multiple>
            <FileUpload.Input />
            <FileUpload.Dropzone className="dropzone">
              <span className="dropzone-icon" aria-hidden="true">📂</span>
              <span className="dropzone-text">클릭하거나 파일을 드래그하세요</span>
              <span className="dropzone-hint">모든 파일 형식 지원</span>
            </FileUpload.Dropzone>

            {errors.length > 0 && (
              <ul className="error-list" role="alert" aria-label="업로드 오류">
                {errors.map((err, i) => (
                  <li key={i} className="error-item">{err}</li>
                ))}
              </ul>
            )}

            {files.length > 0 && (
              <FileUpload.Preview className="file-list">
                {files.map((f) => (
                  <FileUpload.Item key={f.id} file={f} className="file-item">
                    <span className="file-name">{f.file.name}</span>
                    <span className="file-size">{formatBytes(f.file.size)}</span>
                    <button
                      type="button"
                      onClick={() => removeFile(f.id)}
                      className="file-remove-btn"
                      aria-label={`${f.file.name} 삭제`}
                    >
                      ×
                    </button>
                  </FileUpload.Item>
                ))}
              </FileUpload.Preview>
            )}
          </FileUpload.Root>
        </div>
      )
    }
    return <DefaultExample />
  },
}

/**
 * 이미지 업로드 (미리보기 포함).
 *
 * accept로 이미지만 허용하고, 업로드된 이미지를 미리보기로 표시합니다.
 */
export const ImageUploadWithPreview: StoryObj = {
  name: 'Image Upload with Preview',
  render: () => {
    const ImageExample = () => {
      const { files, errors, addFiles, removeFile } = useFileUpload({
        multiple: true,
        accept: ['image/*'],
        maxSize: 5 * 1024 * 1024, // 5MB
      })

      return (
        <div style={{ width: '400px' }}>
          <FileUpload.Root files={files} addFiles={addFiles} removeFile={removeFile} multiple accept="image/*">
            <FileUpload.Input />
            <FileUpload.Dropzone className="dropzone">
              <span className="dropzone-icon" aria-hidden="true">🖼️</span>
              <span className="dropzone-text">이미지를 드래그하거나 클릭하여 선택</span>
              <span className="dropzone-hint">JPG, PNG, GIF, WebP · 최대 5MB</span>
            </FileUpload.Dropzone>

            {errors.length > 0 && (
              <ul className="error-list" role="alert" aria-label="업로드 오류">
                {errors.map((err, i) => (
                  <li key={i} className="error-item">{err}</li>
                ))}
              </ul>
            )}

            {files.length > 0 && (
              <FileUpload.Preview className="file-list">
                {files.map((f) => (
                  <FileUpload.Item key={f.id} file={f} className="file-item">
                    {f.previewUrl && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={f.previewUrl} alt={f.file.name} className="file-preview-img" />
                    )}
                    <span className="file-name">{f.file.name}</span>
                    <span className="file-size">{formatBytes(f.file.size)}</span>
                    <button
                      type="button"
                      onClick={() => removeFile(f.id)}
                      className="file-remove-btn"
                      aria-label={`${f.file.name} 삭제`}
                    >
                      ×
                    </button>
                  </FileUpload.Item>
                ))}
              </FileUpload.Preview>
            )}
          </FileUpload.Root>
        </div>
      )
    }
    return <ImageExample />
  },
}

/**
 * 단일 파일 업로드.
 *
 * multiple=false로 한 번에 하나의 파일만 허용합니다.
 * 새 파일을 추가하면 기존 파일이 교체됩니다.
 */
export const SingleFile: StoryObj = {
  name: 'Single File',
  render: () => {
    const SingleFileExample = () => {
      const { files, errors, addFiles, removeFile } = useFileUpload({ multiple: false })

      return (
        <div style={{ width: '400px' }}>
          <FileUpload.Root files={files} addFiles={addFiles} removeFile={removeFile} multiple={false}>
            <FileUpload.Input />
            <FileUpload.Dropzone className="dropzone">
              <span className="dropzone-icon" aria-hidden="true">📄</span>
              <span className="dropzone-text">파일 하나를 선택하세요</span>
              <span className="dropzone-hint">새 파일을 선택하면 기존 파일이 교체됩니다</span>
            </FileUpload.Dropzone>

            {errors.length > 0 && (
              <ul className="error-list" role="alert" aria-label="업로드 오류">
                {errors.map((err, i) => (
                  <li key={i} className="error-item">{err}</li>
                ))}
              </ul>
            )}

            {files.length > 0 && (
              <FileUpload.Preview className="file-list">
                {files.map((f) => (
                  <FileUpload.Item key={f.id} file={f} className="file-item">
                    <span className="file-name">{f.file.name}</span>
                    <span className="file-size">{formatBytes(f.file.size)}</span>
                    <button
                      type="button"
                      onClick={() => removeFile(f.id)}
                      className="file-remove-btn"
                      aria-label={`${f.file.name} 삭제`}
                    >
                      ×
                    </button>
                  </FileUpload.Item>
                ))}
              </FileUpload.Preview>
            )}
          </FileUpload.Root>
        </div>
      )
    }
    return <SingleFileExample />
  },
}
